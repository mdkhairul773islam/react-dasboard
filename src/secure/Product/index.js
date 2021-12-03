import { React } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import KitchenSinkStory from 'react-data-table-component';
import {
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";


function Index(props) {


    const handleButtonClick = (e) => {
        console.log(e.target.id);
    };

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            action: row => row.action
        },
        {
            name: 'Year',
            selector: row => row.year,
            action: row => row.action
        },
        {
            name: 'Action',
            //cell: (row) => <button className="btn btn-primary xs" onClick={handleButtonClick} id={row.id}>{row.action[0]}</button>,
            cell: (row) => (
                <>
                    <span onClick={() => handleButtonClick(row.id)} className='btn btn-primary'>Show</span>
                    <span onClick={() => handleButtonClick(row.id)} className='btn btn-success'>Edit</span>
                    <span onClick={() => handleButtonClick(row.id)} className='btn btn-danger'>Delete</span>
                </>
            ),

            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Lejuice',
            year: '20',
            action: ['View', 'edit', 'delete'],
        },
        {
            id: 112,
            title: 'Beetlejuice',
            year: '1988',
            action: ['View', 'edit', 'delete'],
        },

    ];

    const customStyles = {

    };

    return (
        <AdminWraper menuOpen='product'>
            <Container className="p-0" fluid>
                <Row>
                    <div className="body_nav">
                        <Navbar />
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h4" className="fw-bold">
                                All Product
                            </Card.Header>
                            <Card.Body>

                                <KitchenSinkStory customStyles={customStyles}
                                    columns={columns}
                                    data={data}

                                    fixedHeader
                                    fixedHeaderScrollHeight="60vh"
                                    highlightOnHover
                                    pagination
                                    pointerOnHover
                                    responsive
                                    selectableRows
                                    selectableRowsHighlight
                                    selectableRowsRadio="checkbox"
                                    subHeaderAlign="right"
                                />

                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper>
    );
}

export default Index;
