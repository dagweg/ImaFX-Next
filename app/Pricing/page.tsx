import React from 'react'
import './pricing.css'

function Pricing() {
    const freeOptions = [
        "Basic image editing",
        "Image cropping",
        "Image resizing",
        "Image format conversion",
        "Limited storage (5GB)",
        "Ads-supported experience",
    ];

    const proOptions = [
        "Advanced image editing tools",
        "Batch processing",
        "Unlimited storage",
        "No ads",
        "Priority support",
        "Integration with popular cloud services",
    ];

    const enterpriseOptions = [
        "Customizable workflows",
        "AI-powered image processing",
        "High-performance image processing",
        "24/7 dedicated support",
        "Compliance and security features",
        "White-labeling and branding",
    ];

    return (
        <>
            <div className='sm:h-auto md:h-auto 2xl:h-screen'>
                <div className='text-center py-20 '>
                    <h1 className='text-7xl py-4 font-black'>Pricing</h1>
                    <h1 className='text-xl'>Choose the plan that suits your needs</h1>
                </div>
                <div className='pricing-choices flex flex-col justify-center items-center md:flex-row md:items-start'>
                    <div className='card-price starter '>
                        <h1 className='badge bg-gray-500'>Starter</h1>
                        <h1 className='price'>Free</h1>
                        <p className='description'>Get started with our free plan and enjoy limited features.</p>
                        <p className='tier-features'>
                            {freeOptions.map((text, index) => (
                                <>
                                    <span className='feature'><span className='check-mark fa-solid fa-square-check'></span>{text}</span>
                                </>
                            ))}
                        </p >
                    </div>
                    <div className='card-price pro '>
                        <h1 className='badge bg-blue-500'>Pro</h1>
                        <h1 className='price'>$4.99<span className='inline md:block'>/mo</span></h1>
                        <p className='description'>Elevate your image processing with our Pro tier designed for Small teams.</p>
                        <p className='tier-features'>
                            {proOptions.map((text, index) => (
                                <>
                                    <span className='feature'><span className='check-mark fa-solid fa-square-check'></span>{text}</span>
                                </>
                            ))}
                        </p >
                    </div>
                    <div className='card-price enterprise '>
                        <h1 className='badge bg-purple-500'>Enterprise</h1>
                        <h1 className='price'>$19.99<span className='inline md:block'>/mo</span></h1>
                        <p className='description'>For businesses and organizations with extensive image processing needs.</p>
                        <p className='tier-features'>
                            {enterpriseOptions.map((text, index) => (
                                <>
                                    <span className='feature'><span className='check-mark fa-solid fa-square-check'></span>{text}</span>
                                </>
                            ))}
                        </p >
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing