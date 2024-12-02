import { getChiTietLoaiCongViecAction } from "../../../actions/service/productApi";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "Explore Job Categories - Professional Services",
    description:
      "Discover detailed information about job categories including design, development, and more. Find the best services tailored to your needs.",
    openGraph: {
      title: "Explore Job Categories - Professional Services",
      description:
        "Explore popular job categories and services like logo design, interior design, and more. Start your journey with top-rated professionals.",
      url: "https://demo-fiverr.vercel.app/title", // Thay thế bằng URL thực tế
      images: [
        {
          url: "https://fiverrnew.cybersoft.edu.vn/images/lcv2.jpg", // URL hình ảnh thực tế
          width: 1200,
          height: 630,
          alt: "Job Categories Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Explore Job Categories - Professional Services",
      description:
        "Discover job categories and related services, including design, development, and custom solutions for your business needs.",
      images: ["https://fiverrnew.cybersoft.edu.vn/images/lcv2.jpg"], // URL hình ảnh thực tế
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Job Categories",
      description:
        "Explore a variety of job categories including design, development, and professional services to find the perfect match for your project.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 2,
          name: "Logo Design",
          url: "https://demo-fiverr.vercel.app/categories/2", // URL thực tế cho mục
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Website Design",
          url: "https://demo-fiverr.vercel.app/categories/5", // URL thực tế cho mục
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "App Design",
          url: "https://demo-fiverr.vercel.app/categories/6", // URL thực tế cho mục
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Social Media Marketing",
          url: "https://demo-fiverr.vercel.app/categories/8", // URL thực tế cho mục
        },
      ],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://demo-fiverr.vercel.app/result?keyword={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };
  
library.add(fas);
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

return (
    <>
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