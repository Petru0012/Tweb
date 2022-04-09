
import {Card, Checkbox, Col, Input} from 'antd'
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {IContentModel} from "../Interface/interfaces";
export const CustomCard=observer(({content}:{content:IContentModel}) =>{
        const {title,comment,notes,changeNotes,isSeen,changeSeen,seen} =content
    useEffect(()=>{
        if(isSeen) {
            alert(`Is seen ${ title }`)
        }
},[isSeen])
    return (

        <Card title={title} bordered={false}>
            {comment}
            <Input value={notes}
                   placeholder={notes}
                   onChange={(e)=>changeNotes(e.target.value)}
            />
            <Checkbox defaultChecked={ isSeen } checked={isSeen} onChange={(e)=>changeSeen(e.target.checked)}/>

        </Card>

    )
}
)

