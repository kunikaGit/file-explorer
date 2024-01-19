import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import FileExplorer from "../fileExplorer";

const Sidebar = () => {
    return (
        <>
            <Col md={3}>
                <Container>
                <div className="main-sidebar">
                    <div className="inner-sidebar">
                        <FileExplorer />
                    </div>
                </div>
                </Container>
            </Col>
        </>
    )
}
export default Sidebar