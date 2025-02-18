import img from '../../assets/Partners/std.jpg'

const AboutUs = () => {
    return (
        <div className='text-center mt-10 mb-12 bg-[#FDF6EA] text-gray-900 p-4 md:p-6 rounded-2xl md:w-11/12 mx-auto'>

            <h3 className="font-bold text-3xl mb-3">Who are we?</h3>
            <p className='text-sm'>the future of education. Join us in redefining the learning experience!</p>

            <div className='mt-6 mb-6 md:p-8 md:flex md:justify-around items-center gap-5'>
                <div className='w-1/2 md:py-16 text-center  md:text-left'>
                    <p className='font-poppins font-medium '>
                    Academia is an innovative platform designed to revolutionize the way educational institutions, tutors, and students interact, making skill learning and class management more efficient and accessible than ever before. Our mission is to bridge the gap between traditional education and digital transformation by providing an all-in-one solution that simplifies administrative tasks for institutions, enhances student engagement for tutors, and offers personalized learning experiences for students. With a user-friendly interface, smart learning management tools, data-driven insights, and seamless communication features, Academia empowers educators and learners with the technology they need to succeed. Whether it’s course creation, attendance tracking, performance analytics, or interactive learning, our platform ensures a streamlined and enriching educational experience for all. Academia is not just a tool—it’s the future of education, designed to make learning more effective, engaging, and accessible for everyone.
                    </p>


                </div>
                <div className='w-1/2 text-center rounded-3xl'>
                    <img className='md:w-12/12 md:mx-auto h-96 rounded-3xl object-contain' src={img} alt="" />
                </div>
            </div>


        </div>
    );
};

export default AboutUs;