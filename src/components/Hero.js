export default function Hero({ content, theme }) {
    return (
        <div 
            className="bg-base p-4 text-xl"
            data-theme={theme}
        >
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3">
                <div className="lg:col-span-3 xl:col-span-2 text-base-content">
                    <h1 className="pb-4 text-3xl mb-2">{content.header}</h1>
                    <ul className="list-disc ml-4 md:ml-6">
                        {content.list.map((item) => 
                            <li className=" pb-4">{item}</li>
                        )}
                    </ul>
                </div>
            </div>
            <p className='mt-8'>{content.CTA}</p>
        </div>
    )
}