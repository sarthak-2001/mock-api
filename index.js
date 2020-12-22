const express = require('express')

const app = express();

let port = process.env.PORT || 3001;

responseObject = [
    {
        Status: "Success",
        StatusCode: 200,
        Message: "Response fetched successfully",
        Data: [
            {
                conditions: [
                    {
                        conditionType: "test",
                        conditionValue: [],
                    },
                ],
                replaceMentValues: [],
            },
        ],
    },
];

app.post('/test',(req,res)=>{
    console.log('trigger');
    res.send(responseObject);
})


app.listen(port, () => {
    console.log(`at ${port}`)
  })