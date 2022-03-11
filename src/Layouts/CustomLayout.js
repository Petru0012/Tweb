
import { Card, Col } from 'antd'
function CustomCard({title, comment}) {

    return (

        <Col span={8}>
            <div style={{ paddingBottom: '8px',paddingTop:'8px'}}>
                <Card title={title} bordered={false}>
                    {comment}
                </Card>
            </div>
        </Col>

    )
}

export default CustomCard