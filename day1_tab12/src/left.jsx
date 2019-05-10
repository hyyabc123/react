import React,{Component} from "react"
import axios from "axios"
import Right from "./right"
export default class extends Component{
    state={
        list:[],
        rightData:[],
        ind:0
    }
    render(){
        let {ind,list,rightData}=this.state
        return <div className="left">
                    <div className="left_left">
                        {
                            list.map((item,key)=><li key={key} style={{color:key==ind?"red":"black"}} onClick={()=>{
                                
                                axios.post('/api/right',{
                                    id:item.id
                                }).then((res)=>{
                                    // console.log(res.data)   
                                    this.setState({ 
                                        rightData:res.data.child,
                                        ind:key
                                    },()=>{
                                        // console.log(this.state.rightData)
                                    })
                                })
                            }}>{item.title}</li>)
                        }
                    </div>
                    <Right rightData={rightData}/>
               </div>
    }
    componentDidMount(){
        let {list}=this.state
        axios.get("/api/index").then((res)=>{
            console.log(res.data.datalist)
            this.setState({ 
                list:res.data.datalist
            },()=>{

            })
        })
        axios.post('/api/right',{
            id:1
        }).then((res)=>{
            this.setState({
                rightData:res.data.child
            })
        })
    }
}