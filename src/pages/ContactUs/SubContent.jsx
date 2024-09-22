const data = [
    {
        title: 'Feedback and suggestions',
        desc: 'We value your feedback and are continuously working to improve Shappy. Your input is crucial in shaping the future of Shappy.'
    },
    {
        title: 'Customer support',
        desc: 'Our support team is available around the clock to address any concerns or queries you may have.'
    },
    {
        title: 'Media inquiries',
        desc: 'For media-related questions or presa inquiries, please contact us at helptag365@gmail.com'
    }
]

export function SubContent() {
    return data.map((item, index) => (
        <div key={index}>
            <h2 className='text-lg font-semibold'>{item?.title}</h2>
            <p className='text-md text-dimmed'>{item?.desc}</p>
        </div>
    ))
}