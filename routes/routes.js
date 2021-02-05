
const asyncMiddleware = require('../utils/asyncMiddleware');
const status = require('../utils/statusCodes');
const express = require('express');
const router = express.Router();


const graphActions = {
    getGraph: asyncMiddleware(async (req, res) => {
        let { envLocal } =req.body; 
        for (let i = 1; i < 1440; i++) {
            let envLocalChanged = envLocal[i - 1][data.profile];
            let g = parseFloat(envLocalChanged) * parseFloat(data.dailyUsage) * specificHeatWater * (1 / 3600) * (parseFloat(data.hotWaterDrawOff) - parseFloat(data.coldWaterTemp));
            let j = curve[i - 1] / (specificHeatWater / 3600) / parseFloat(dataRetrieved['storageVolume']) + parseFloat(dataRetrieved['coldWaterTemp']);
            let k = (c17 * (1 - ((j - parseFloat(dataRetrieved['coldWaterTemp'])) / (parseFloat(dataRetrieved['flowTemp']) - parseFloat(dataRetrieved['coldWaterTemp'])))) / 360);
            /* console.log(enValues[i][data.profile]); */
            curve[i] = curve[i - 1] - g - c14 + k;
            jCurve[i] = curve[i] / (specificHeatWater / 3600) / parseFloat(dataRetrieved['storageVolume']) + parseFloat(dataRetrieved['coldWaterTemp']);
            count[i] = i;
            minTemp[i] = parseFloat(dataRetrieved['minTemp']);
            tankEnergy[i] = ((jCurve[i] - parseFloat(dataRetrieved['minTemp'])) / (parseFloat(dataRetrieved['maxTemp']) - parseFloat(dataRetrieved['minTemp']))) * 100;
          }
          let minTankEnergy = Math.min(...tankEnergy);
       if(minTankEnergy){
        res.status(status.success.created).json({
            message: 'Calculation done sucessfully',
            data: minTankEnergy,
            status: 200
        });
        
    }
    else{
        res.status(status.success.created).json({
            message: 'Something went wrong',
            status: 400
        });
    }
    }),

    
    

};
router.get('/get-graph' , graphActions.getGraph)
// User

module.exports = router;