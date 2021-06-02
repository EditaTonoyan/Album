import { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageList from '../../imageList/ImageList';
import Spinner from '../../spinner/Spinner';
import { getimageArtThunk } from '../../../store/action';


const Art = (props) => {

    useEffect(() => {
        props.getImages()
    }, [])

    const {
        image,
        isOpenSpinner
    } = props


    return (
        <div>
            <ImageList images={image} />
            {isOpenSpinner && <Spinner />}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        image: state.globalState.image,
        isOpenSpinner: state.globalState.isOpenSpinner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getImages: (data) => {
            dispatch(getimageArtThunk(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Art)