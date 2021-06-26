const {EventListner} = require('./event')

let RegistarEvent = new EventListner();
RegistarEvent.setRoleAndIdentity("Registar","admin")
RegistarEvent.initChannelAndChaincode("autochannel", "Chaincode");
RegistarEvent.contractEventListner('SampleListner','addPlotEvent');
let BlockCreateEvent = new EventListner();
     BlockCreateEvent.blockEventListner('blockEvent');
