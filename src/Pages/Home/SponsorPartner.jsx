import google from '../../assets/Partners/google.png'
import micro from '../../assets/Partners/micro.png'
import aws from '../../assets/Partners/aws.png'
import khan from '../../assets/Partners/khan.png'
import coursera from '../../assets/Partners/coursera.png'
import unsplash from '../../assets/Partners/unsp.png'

const SponsorPartner = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                    Trusted by Our Partners
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    We collaborate with leading companies to deliver the best learning experience.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {/* Replace with real logo URLs */}
                    <img src={google} alt="Partner Logo 1" className="h-12 grayscale hover:grayscale-0" />
                    <img src={micro} alt="Partner Logo 2" className="h-12 grayscale hover:grayscale-0" />
                    <img src={khan} alt="Partner Logo 3" className="h-12 grayscale hover:grayscale-0" />
                    <img src={aws} alt="Partner Logo 4" className="h-12 grayscale hover:grayscale-0" />
                    <img src={unsplash} alt="Partner Logo 5" className="h-12 grayscale hover:grayscale-0" />
                    <img src={coursera} alt="Partner Logo 6" className="h-12 grayscale hover:grayscale-0" />
                </div>
            </div>
        </div>
    );
};

export default SponsorPartner;
