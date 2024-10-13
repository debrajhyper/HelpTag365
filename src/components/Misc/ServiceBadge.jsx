export const ServiceBadge = ({ ...service }) => {
    const { image, title } = service;
    return (
        <div className="inline-flex min-w-fit p-5 gap-4 rounded-2xl bg-primary-light text-primary-dark">
            <img src={image} alt={title} className="w-5 h-5" />
            <p className="text-ellipsis text-sm font-normal whitespace-nowrap">{title}</p>
        </div>
    )
}