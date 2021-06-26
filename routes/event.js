const {profile} = require('./profile')
const { FileSystemWallet, Gateway } = require('fabric-network');
const util = require('util')

// sets the location of the wallet
// loads the connectionProfile.a yaml file
// creates an object of the gateway class

class EventListner{

   setRoleAndIdentity(role,identityLabel){
       this.Profile = profile[role.toLowerCase()]
       let  wallet = new FileSystemWallet(this.Profile["Wallet"])
       this.connectionOptions = {
           identity: identityLabel,
           wallet: wallet,
           discovery: { enabled: true, asLocalhost: true }
       }      
   }

   initChannelAndChaincode(channelName,contractName){
       //set channel name
       this.channel = channelName
       //set contract name
       this.contractName = contractName
       this.gateway = new Gateway()   
    }
 
    async contractEventListner(eventListnerName,eventName){
        await this.gateway.connect(this.Profile["CCP"],
                             this.connectionOptions);
        let channel = await this.gateway.getNetwork(this.channel);
        let contract = await channel.getContract(this.contractName)
        
 
  await contract.addContractListener(eventListnerName, eventName, (err,
                        event, blockNumber, transactionId, status) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Event: ${event.payload.toString()}`);
        })      
    }
    async blockEventListner(eventListnerName){
        await this.gateway.connect(this.Profile["CCP"], this.connectionOptions);
        let channel = await this.gateway.getNetwork(this.channel);
        await channel.addBlockListener(eventListnerName,(err,block)=>{
            if(err){
                console.log(err)
            }
            console.log(util.inspect(block));
        })
    }
    async txnListner(transactionName){
        await this.gateway.connect(this.Profile["CCP"],
                                   this.connectionOptions);
        let channel = await this.gateway.getNetwork(this.channel);
        let contract = await channel.getContract(this.contractName)
        let transaction = contract.createTransaction(transactionName)
        await transaction.addCommitListener((err,transactionId,
                                             status,blockNumber)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(util.inspect(transactionId))
            console.log(util.inspect(status))
            console.log(util.inspect(blockNumber))      
        })
        await transaction.submit('1231','1','2','3','4','5')
    }
 
    
       async generateBlockEvent(){
        await this.gateway.connect(this.Profile["CCP"],this.connectionOptions);
        let channel = await this.gateway.getNetwork(this.channel);
        let contract = await channel.getContract('Chaincode')
        await contract.addContractListener("my-event",'addPlotEvent', (err, event, blockNumber, transactionId, status) => {
            if (err) {
                console.error(err);
                return;
            }
            let payload = event.payload
            console.log("Block created event is:" + payload.toString())
            return(payload.toString());
 
        });
       
    }
 
      
}

  module.exports = {
     EventListner
  }