export default function ContactBox({ title, icon, text }) {
  return (
    <div
      className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div className="flex items-center">
        <i className={ `bx ${ icon } text-2xl text-grey-40` }></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          { title }
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        { text }
      </p>
    </div>
  );
}