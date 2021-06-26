let profile = {
    buyer : {
    
        "Wallet":"../Network/wallets/Buyer",
        
        "CCP": "../Network/gateways/Buyer/Buyer gateway.json"
        
        },
        
        seller : {
        
        "Wallet":"../Network/wallets/Seller",
        
        "CCP": "../Network/gateways/Seller/Seller gateway.json"
        
        },
        
        registar :{
        
        "Wallet":"../Network/wallets/Registar",
        
        "CCP": "../Network/gateways/Registar/Registargateway.json"
        
        }
        


}

module.exports = {
    profile
}