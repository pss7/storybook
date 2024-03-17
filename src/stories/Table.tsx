import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

export interface TableProps {

    className?: string;
    data?: Array<any>;

}

function Table({ className }: TableProps) {

    const data = [
        {
            title: 'text',
            desc: 'content'

        },
        {
            title: 'text',
            desc: 'content'
        },
        {
            title: 'text',
            desc: 'content'
        },
        {
            title: 'text',
            desc: 'content'
        }
    ]

    return (
        <>
            <GlobalStyle />
            <TableBox>
                <table>
                    <caption className="blind">테이블</caption>
                    <thead>
                        <tr>
                            {
                                data.map((data, key) => (
                                    <th key={key}>
                                        {data.title}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, key) => (
                                <tr key={key}>
                                    <td>
                                        {data.desc}
                                    </td>
                                    <td>
                                        {data.desc}
                                    </td>
                                    <td>
                                        {data.desc}
                                    </td>
                                    <td>
                                        {data.desc}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </TableBox>
        </>
    )

}

const TableBox = styled.div`
table{
width: 100%;
thead th{
    padding: 3px;
    text-align: center;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    font-size: 14px;
}

tbody tr:nth-child(even) {
    background-color: #ddd;
}

tbody tr td {
    padding: 7px 5px 7px 10px;
    font-size: 13px;
    font-weight: 500;
  }
}
`;

export default Table