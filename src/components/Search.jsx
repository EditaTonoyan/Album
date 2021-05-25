import { Input, Space } from 'antd';
import {connect} from 'react-redux';
import {changeSearchInputThunk} from '../store/action';

const Search = (props) => {
    const { Search } = Input;

const {value} = props;

const userSub = () => {
    props.onSub(value)
}

    return (
        <div  onSubmit = {userSub}>
            <Space 
              
                direction="vertical"
            >
                <Search
                name='value'
                placeholder="Search another category"
                enterButton="Search"
                size="large"
                onSearch={userSub}
                onChange={(e) => props.handleChange(e.target)}
                value={value}

                
                />
            </Space>
           
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        value:state.searchState.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange:(target) => {
            dispatch(changeSearchInputThunk(target))
        },
        getImages:(data) => {
            dispatch({type:"get_images", data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)