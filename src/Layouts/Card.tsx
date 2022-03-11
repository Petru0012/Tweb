import { Row } from 'antd';
import CustomLayout from './CustomLayout';
const comment = [
    {id: 1,title: "Card 1", comment: "comment"},
    {id: 2, title: "Card 2", comment: "comment"},
    {id: 3, title: "Card 3",comment: "comment"},
]


function Card() {
    return (

        <Row gutter={16} >
            {
                comment.map((element, i) => {
                    return (
                        <CustomLayout key={element.id} title={element.title} comment={element.comment}/>
                    )
                })
            }
        </Row>
    )
}

export default Card