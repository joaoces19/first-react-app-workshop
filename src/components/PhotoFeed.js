import React from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import { Col, Row } from "antd";

const propTypes = {
    posts: PropTypes.array.isRequired,
    onLikeIncrement: PropTypes.func.isRequired
};

function PhotoFeed({ posts, onLikeIncrement }) {
    return (
        <div className="App-body">
            <Row gutter={40}>
                {posts.map((post) => (
                    <Col key={`col_${post.id}`} span={8}>
                        <Photo {...post} onLikeIncrement={onLikeIncrement} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

PhotoFeed.propTypes = propTypes;

export default React.memo(PhotoFeed);
