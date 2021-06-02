
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageList from '../../imageList/ImageList';
import Spinner from '../../spinner/Spinner';
import { getimagetechThunk } from '../../../store/action';


const Technology = (props) => {

    useEffect(() => {
        props.getImages()
    }, [])

    const {
        image,
        isOpenSpinner
    } = props

    return (
        <div >
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

        getImages: () => {
            dispatch(getimagetechThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Technology)