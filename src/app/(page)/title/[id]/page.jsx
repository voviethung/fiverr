import { getChiTietLoaiCongViecAction } from "../../../actions/service/productApi";
import React from "react";
import Link from "next/link";
// import { Helmet } from "react-helmet"; // Import Helmet
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useParams } from "react-router-dom";
// import { AppDispatch, RootState } from "../../redux/configStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { DsChiTietLoai, DsNhomChiTietLoai } from "../../redux/models/JobModel";
// import { getJobTitleDetailApi } from "../../redux/reducers/jobReducer";

// type Props = {};
library.add(fas);

// export default function JobTitle({}) {
//   const params: any = useParams();
//   const dispatch: AppDispatch = useDispatch();
//   const { jobTitleDetail } = useSelector(
//     (state: RootState) => state.jobReducer
//   );

//   let { id } = params;
//   // console.log("-", jobTitleDetail);

//   useEffect(() => {
//     dispatch(getJobTitleDetailApi(id));
//     // console.log("--", jobTitleDetail);
//   }, [id]);

const JobTitle = async ({ params }) => {
    const id = params.id; // Lấy giá trị 'id' từ đường dẫn động
    const jobTitleDetail = await getChiTietLoaiCongViecAction(id);

const renderExploreContent = () => {
    return jobTitleDetail.map((group, index) => (
        <div key={group.index}> {/* Sử dụng `group.id` nếu có */}
            {group.dsNhomChiTietLoai.map((item, index) => {
                return (
                    <div key={item.index} className=" item d-inline-block card border-0 shadow-sm px-3 py-2 flex-shrink-0"
                    style={{
                        minWidth: '200px',
                        boxShadow: '0px 0px 20px 0px rgba(255,255,255,0)',
                    }}
                    > {/* Sử dụng `item.id` */}
                        <img src={item.hinhAnh} alt="..." style={{ width: '100%', height: 'auto' }}/>
                        <div className='card-body'>
                        <h1>{item.tenNhom}</h1>
                        {item.dsChiTietLoai.map((chiTiet, index) => {
                            return (
                                <p key={chiTiet.index}> {/* Sử dụng `chiTiet.id` */}
                                    <Link href={`/categories/${chiTiet.id}`}>
                                        {chiTiet.tenChiTiet}
                                    </Link>
                                </p>
                            );
                        })}
                        </div>
                    </div>
                );
            })}
        </div>
    ));
};


    // const renderExploreContent = () => {
    //     { jobTitleDetail.map(group) => (
    //         <div key={group.index}>
    //             {group.dsNhomChiTietLoai.map(item, index) => {
    //             return (
    //             <div className="item" key={item.index}>
    //                 <img src={item.hinhAnh} alt="..." />
    //                 <h1>{item.tenNhom}</h1>
    //                 {item.dsChiTietLoai.map((chiTiet, index) => {
    //                     return (
    //                         <p key={chiTiet.index}>
    //                             <Link to={`/categories/${chiTiet.id}`}>
    //                                 {chiTiet.tenChiTiet}
    //                             </Link>
    //                         </p>
    //                     );
    //                 })}
    //             </div>
    //             );
    //         }
    //     }
    //         </div>
    //     )}}


return (
    <>

        {/* Helmet SEO Tags */}
        {/* <Helmet>
        <title>{jobTitleDetail.tenLoaiCongViec || "Job Title"}</title>
        <meta
          name="description"
          content={`Explore various services under ${jobTitleDetail.tenLoaiCongViec || "this category"}. Find the best freelancers for your needs.`}
        />
        <meta
          name="keywords"
          content={`freelance, services, ${jobTitleDetail.tenLoaiCongViec}, popular jobs`}
        />
        <meta property="og:title" content={jobTitleDetail.tenLoaiCongViec || "Job Title"} />
        <meta
          property="og:description"
          content={`Explore the top services under ${jobTitleDetail.tenLoaiCongViec || "this category"} on our platform.`}
        />
        <meta property="og:image" content={jobTitleDetail.hinhAnh || "/default-image.jpg"} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet> */}
      {jobTitleDetail.map((group, index) => (
        <div key={group.index}>
        <section className="banner-job-title">
            <div className="banner_container">
                <div className="content">
                    <h1>{group.tenLoaiCongViec}</h1>
                    <p>Designs to make you stand out.</p>
                    <button className="btn btn-outline-light">
                        <FontAwesomeIcon icon={["far", "circle-play"]} className="fa" />
                        <span>How Fiverr Works</span>
                    </button>
                </div>
            </div>
        </section>

        <section className="popular-job-title">
            <div className="container mt-lg-5 mt-sm-3 mb-lg-5 mb-sm-3">
                <h1>Most popular in {group.tenLoaiCongViec}</h1>
                <div className="content">
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                            alt="..."
                        />
                        <span>Minimalist Logo Design</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="fa" />
                    </div>

                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                            alt="..."
                        />
                        <span>Architecture & Interior Design</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="fa" />
                    </div>

                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                            alt="..."
                        />
                        <span>Image Editing</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="fa" />
                    </div>

                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
                            alt="..."
                        />
                        <span>NFT Art</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="fa" />
                    </div>

                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                            alt="..."
                        />
                        <span>T-Shirts & Merchandise</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="fa" />
                    </div>
                </div>
            </div>
        </section>

        <section className="explore-job-title">
            <div className="container">
                <h1>Explore {group.tenLoaiCongViec}</h1>
                <div className="content">
                    {group.dsNhomChiTietLoai ? renderExploreContent() : <></>}
                </div>
            </div>
        </section>

        <section className="related-job-title">
            <div className="container mt-lg-5 mb-lg-5 mt-md-4 mb-md-4 mt-sm-2 mb-sm-2 text-center">
                <h1 className="mb-lg-5 mb-md-4 mb-sm-2">
                    Services Related To{" "}
                    {group.tenLoaiCongViec
                        ? group.tenLoaiCongViec
                        : ""}
                </h1>
                <div className="tags">
                    <span>Minimalist logo design</span>
                    <span>Signature logo design</span>
                    <span>Mascot logo design</span>
                    <span>3d logo design</span>
                    <span>Hand drawn logo design</span>
                    <span>Vintage logo design</span>
                    <span>Remove background</span>
                    <span>Photo restoration</span>
                    <span>Photo retouching</span>
                    <span>Image resize</span>
                    <span>Product label design</span>
                    <span>Custom twitch overlay</span>
                    <span>Custom twitch emotes</span>
                    <span>Gaming logo</span>
                    <span>Children book illustration</span>
                </div>
            </div>
        </section>
        </div>
))}
    </>
);
}
export default JobTitle