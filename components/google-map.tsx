interface GoogleMapProps {
    src: string
    title?: string
    className?: string
}

export function GoogleMap({ src, title = "Church Location", className = "" }: GoogleMapProps) {
    return (
        <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
                className="rounded-lg"
            />
        </div>
    )
}
