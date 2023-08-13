import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {

    return (
        <nav>
            <ul className="pagination">
                <li className="pagination-item">
                    <Link className="pag-link" to={"#"}>
                        1
                    </Link>
                </li>
                <li className="pagination-item">
                    <Link className="pag-link" to={"#"}>
                        2
                    </Link>
                </li>
                <li className="pagination-item">
                    <Link className="pag-link" to={"#"}>
                        3
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;