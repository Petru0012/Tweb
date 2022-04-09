import {Form, Input, Button, Menu} from 'antd';
import {useState} from "react";

export const FormM =() =>{

    const[name,setname]=useState('')
    const[lastname,setlastname]=useState('')
    const[email,setemail]=useState('')

    const ShowValue =()=>{
        alert("Name:"+name+"\n"+"Lastname:"+lastname+"\n"+"Email:"+email)
    }
    return(
        <Form
            name="wrap"
            labelCol={{ flex: '100px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
        >

            <Form.Item style={{paddingLeft:'500px'}}
                       label="name" name="name" rules={[{ required: true }]}>
                <Input value={name} onChange={(e )=> setname(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Lastname" name="lastname" rules={[{ required: true }]}>
                <Input value={lastname}  onChange={(e )=> setlastname(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Email" name="email" rules={[{ required: true }]}>
                <Input value={email}  onChange={(e )=> setemail(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item label=" ">

                <Button
                        onClick={ShowValue}  type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>
        </Form>
    )
}
