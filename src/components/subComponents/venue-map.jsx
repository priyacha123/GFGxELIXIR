// kal CN ka exam hai, mai yha hackathon ki website fix kar rha hu :)

export const VenueMap = () => {
    return (
        <div className="w-full max-w-[320px] md:max-w-105 lg:max-w-full h-35 md:h-25 rounded-xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.856798796733!2d77.44301787528907!3d28.634053675664003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1773247024902!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}
