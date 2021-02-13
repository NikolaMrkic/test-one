import React, { useState, useEffect } from 'react';
import { Image, Card, Row } from 'react-bootstrap'
import Pagination from '../pagination/index'
import { useDispatch } from "react-redux";
import GISTS from '../../redux/gists/actions'
import Loanding from '../loanding';

const styleForText = { color: "blue" };

const styleForImage = { filter: "brightness(70%)" };

function GistComponent(props) {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postPerPage] = useState(30);
    const [color, setColor] = useState(false);
    const [ownerId, setOwnerId] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const nextPageHeandler = () => {
        const nextPage = props.nextPage.url
        dispatch(GISTS.nextPage(props.nextPage.url));
        setCurrentPage(props.nextPage.page)
        loadingHandeler();
    };

    const previousPageHeandler = () => {
        if (currentPage == 1) {
            return;

        } else {
            dispatch(GISTS.prevPage(props.prevPage.url));
            setCurrentPage(props.prevPage.page)
            loadingHandeler();

        }
    };


    const changeColor = (data) => {
        let ownerId = data.owner.id;
        setOwnerId(ownerId);
        setColor(true);
        setTimeout(() => {
            setColor(false);
        }, 1000);
    };

    const loadingHandeler = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            setShow(!show);
        }, 1000);
    };

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading, props]);


    if (loading) {
        return <Loanding />
    } else if (props.gists) {
        return (
            <div>
                <h3 className="header-background">Gists</h3>
                {props.gists.map((data, index) => {
                    let ownerImage = data.owner.avatar_url
                    return (
                        <div key={index} >
                            <Card body key={data.id} >
                                <Row onClick={() => changeColor(data)}>
                                    <div>
                                        {ownerId === data.owner.id ?
                                            <Image width={100} height={100} src={ownerImage} style={color ? styleForImage : null} /> :
                                            <Image width={100} height={100} src={ownerImage} />}
                                    </div>
                                    <div className='ml-2'>
                                        {Object.values(data.files).map((fileData, index) => {
                                            return (
                                                <div key={index}>
                                                    {ownerId === data.owner.id ?
                                                        <p style={color ? styleForText : null}>{fileData.filename}</p> :
                                                        <p>{fileData.filename}</p>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Row>
                            </Card>
                        </div>
                    )
                })}
                <Pagination previousPageHeandler={previousPageHeandler} currentPage={currentPage} nextPageHeandler={nextPageHeandler} />
            </div>
        );
    } else {
        return (
            <Loanding />
        )
    }

}

export default GistComponent;