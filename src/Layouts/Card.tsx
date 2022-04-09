
import {Breadcrumb, Row} from 'antd';
import {CustomCard} from './CustomLayout';
import {Content} from "antd/es/layout/layout";
import {useRootStore} from "../index";
import {IContentModel} from "../Interface/interfaces";

function Card() {
    const {contents} = useRootStore()
    return (

        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} >
                {contents.map((content:IContentModel) => {
                    return (
                        <CustomCard key={content.id} content={content}/>
                    )
                } )}

            </Row>

        </div>
    )
}

export default Card