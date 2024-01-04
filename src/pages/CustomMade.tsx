import { useState } from 'react';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
  uploadUrl: string;
}

const CustomMade = () => {
  const [customOrders, setCustomOrders] = useState<FormDataProps[]>([]);
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    message: '',
    uploadUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomOrders([...customOrders, formData]);
    setFormData({
      name: '',
      email: '',
      message: '',
      uploadUrl: '',
    });
  };

  return (
    <div className="container-fluid custom-orders">
      <div className="row custom-orders-bg ">
        <div className="col ">
          <h1 className="custom-orders-title">Custom Made</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>You dream it, we’ll make it! </h2>
          <p>Whether it’s a piece of jewelry, an ornament or something entirely your own, share your idea with us and we’ll do our best to bring it to life.</p>
          <p>Don't forget to attach photos or provide a link from the internet to help us better understand your vision.</p>
          <p>Once we receive your request, we'll reach out to discuss all the details with you.</p>
          <img className="pb-5 pt-3" style={{ width: 40, margin: 'auto' }} src="../../public/images/Home-Page/leaf_divider.svg" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form className="form-cs" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name <span>(optional)</span>
              </label>
              <input className="form-control" value={formData.name} type="text" name="name" id="name" placeholder="Your name here..." onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email <span>(required)</span>
              </label>
              <input
                className="form-control"
                type="email"
                value={formData.email}
                name="email"
                id="email"
                placeholder="Your email address here..."
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message <span>(required)</span>
              </label>
              <textarea
                value={formData.message}
                className="form-control"
                name="message"
                id="message"
                rows={10}
                placeholder="Your message here..."
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="uploadImg">
                Upload Image <span>(optional)</span>
              </label>
              <button className="button-cs-brown-outline-add">
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                Attach Images
              </button>
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="uploadUrl">
                Send Link <span>(optional)</span>
              </label>
              <input
                className="form-control "
                value={formData.uploadUrl}
                type="text"
                name="uploadUrl"
                id="uploadUrl"
                placeholder="https://www.example.com"
                onChange={handleChange}
              />
            </div>

            <p className="mb-4">
              * Due to the nature of handcrafted products, keep in mind that the replicated piece may not appear exactly as shown on the photos. However, we will try our best to
              ensure it closely resembles the original!
            </p>

            <button type="submit" className="button-cs-brown form-control mb-5">
              Send Request
            </button>
          </form>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <h2>Gallery</h2>
        </div>
      </div>
      <div className="row mb-5 row-cols-2">
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_1.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_orders_title.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_3.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_4.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_5.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_6.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_7.jpg" alt="" />
        </div>
        <div className="col p-0 gallery">
          <img className="gallery-img" src="../../public/images/CustomOrdersPage/custom_gallery_8.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomMade;
