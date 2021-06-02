import { Input, Space } from 'antd';
import { connect } from 'react-redux';
import { useState } from 'react';

const Search = (props) => {
    const { Search } = Input;

    const [value, setValue] = useState('');

    const onChange = (event) => {
        const { value } = event.target
        setValue(value)
    }


    // const userSub = () => {
    //     props.onSub(value)
    // }

    return (
        <div>
            <Space

                direction="vertical"
            >

                <Search
                    name='value'
                    placeholder="Search another category"
                    enterButton="Search"
                    size="large"
                    onSearch={() => props.onSub(value)}
                    onChange={onChange}
                    value={value}


                />
            </Space>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {

        getImages: (data) => {
            dispatch({ type: "get_images", data })
        }
    }
}

export default connect(null, mapDispatchToProps)(Search)