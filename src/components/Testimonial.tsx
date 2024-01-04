interface TestimonialProps {
  text: string;
  person: string;
}

const Testimonial = ({ text, person }: TestimonialProps) => {
  return (
    <>
      <div className="position-relative">
        <p className="p-4">{text}</p>
        <img className="position-absolute top-0 start-0" style={{ width: 80 }} src="../../public/images/Home-Page/quotation_open.svg" alt="" />
        <img className="position-absolute bottom-0 end-0" style={{ width: 80 }} src="../../public/images/Home-Page/quotation_close.svg" alt="" />
      </div>
      <h2>{person}</h2>
    </>
  );
};

export default Testimonial;
