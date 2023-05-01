export default function SectionTitle({ title, show = false }) {
    return (
        <div className="flex justify-between items-end">
            <h1 className='font-semibold text-2xl mt-10'>
                {title}
            </h1>

            {
                show ? 
                    <a href=""  className="text-xs font-bold text-neutral-300 hover:underline">
                        Show all
                    </a> : ''
            }

            
        </div>
    );
}