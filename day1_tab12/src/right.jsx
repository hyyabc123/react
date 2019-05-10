import React,{Component} from "react"
export default class extends Component{
    state={

    }
    render(){
        // console.log(this.props.rightData)
        return <div className="right">
                    {
                        this.props.rightData.map((item,key1)=><dl key={key1}>
                            <dt>
                                <img src={item.img} />
                            </dt>
                            <dd>
                                {item.title}
                            </dd>
                        </dl>)
                    }    
                </div>
    }
}