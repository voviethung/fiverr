
import { getCongViecByKeywordAction } from '../../actions/service/productApi';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
// import { Result } from 'antd';
// import { Helmet } from "react-helmet"; // Import Helmet
const Result = async (props) => {
    const keyword = props.searchParams.keyword || '';
    const arrResult = await getCongViecByKeywordAction(keyword);

    const renderService = () => {
        return arrResult.map((service, index) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={service.index}>
                    <ServiceCard service={service} />
                </div>
            );
        });
    };

    return (
        <>
            {/* Helmet for SEO
            <Helmet>
                <title>Results for "{params.name}" - Find Services | Fiverr Clone</title>
                <meta
                    name="description"
                    content={`Explore results for "${params.name}". Find the best freelancers and services for your needs. We provide a wide range of categories to help you succeed.`}
                />
                <meta
                    name="keywords"
                    content={`freelance, services, search results, ${params.name}, hire experts`}
                />
                <meta
                    property="og:title"
                    content={`Results for "${params.name}"`}
                />
                <meta
                    property="og:description"
                    content={`Find the best services related to "${params.name}". Hire experts in a variety of fields to get your work done.`}
                />
                <meta
                    property="og:image"
                    content="https://via.placeholder.com/600x400" // Replace with your relevant image
                />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet> */}
            <section className="result">
                <div className="container">
                    <div className="result-title">
                        <span>Results for {keyword}</span>
                    </div>
                    <div className="result-topbar row justify-content-between">
                        <div className="result-topbar-dropdown col-lg-6  d-flex gap-2">
                            <div className="result-topbar-dropdown-filter">
                                <button
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    Category
                                    <span>
                                        <svg
                                            width="11"
                                            height="7"
                                            viewBox="0 0 11 7"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item active">
                                            All Categories
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Web Programing
                                        </a>
                                        <span>(20,566)</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Data Entry
                                        </a>
                                        <span>(12,566)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="result-topbar-dropdown-filter">
                                <button
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    Service Options
                                    <span>
                                        <svg
                                            width="11"
                                            height="7"
                                            viewBox="0 0 11 7"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item active">
                                            All Categories
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Web Programing
                                        </a>
                                        <span>(20,566)</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Data Entry
                                        </a>
                                        <span>(12,566)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="result-topbar-dropdown-filter">
                                <button
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    Seller Details
                                    <span>
                                        <svg
                                            width="11"
                                            height="7"
                                            viewBox="0 0 11 7"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item active">
                                            All Categories
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Web Programing
                                        </a>
                                        <span>(20,566)</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Data Entry
                                        </a>
                                        <span>(12,566)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="result-topbar-dropdown-filter">
                                <button
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    Delivery Time
                                    <span>
                                        <svg
                                            width="11"
                                            height="7"
                                            viewBox="0 0 11 7"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item active">
                                            All Categories
                                        </a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Web Programing
                                        </a>
                                        <span>(20,566)</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <a href="#a" className="dropdown-item">
                                            Data Entry
                                        </a>
                                        <span>(12,566)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="result-topbar-toggle col-lg-6 d-flex justify-content-end gap-5 align-items-center">
                            <div className="toggle d-flex align-items-center">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round" />
                                </label>
                                <span className="switch-title">Pro services</span>
                            </div>
                            <div className="toggle d-flex align-items-center">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round" />
                                </label>
                                <span className="switch-title">Local sellers</span>
                            </div>
                            <div className="toggle d-flex align-items-center">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round" />
                                </label>
                                <span className="switch-title">Online sellers</span>
                            </div>
                        </div>
                    </div>
                    <div className="result-sort py-3 d-flex justify-content-between align-items-center">
                        {/* {arrResult.map((service, index) => { */}
                      
                                <div className="number-of-result" >
                                    <span className="pre-title">
                                        {/* {arrResult.length} services available */}
                                        {arrResult.length} services available
                                    </span>
                                </div>
                            
                        {/* })} */}
                        <div className="sort-by">
                            <span className="pre-title">Sort by</span>
                            <select>
                                <option defaultValue="relevace">Relevance</option>
                                <option value="bestselling">Best Selling</option>
                                <option value="newarrival">New Arrivals</option>
                            </select>
                        </div>
                    </div>
                    <div className="result-services">
                        <div className="row">{renderService()}</div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Result