import Mock from "mockjs"

let leftData=Mock.mock('/api/index',{
    "datalist|10":[
        {
            title:"@cname",
            "id|+1":1
        }
    ]
})
let rightData = Mock.mock({
    "rightData|10":[
        {
            "id|+1":1,
            "child|20-30":[
                {
                    title:"@ctitle",
                    img:"@image(100x100)"
                }
            ]
        }
    ]
})
console.log(rightData.rightData)
Mock.mock('/api/right',({body})=>{
    let {id} = JSON.parse(body)
    return rightData.rightData.find(item=>item.id==id)
})


