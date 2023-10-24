  export default function BAButton(props) {
    const { label, onClick ,disabled } = props;
    return (
      <button
        onClick={onClick}
        className="rounded-full bg-teal-700 p-2 text-white px-8"
      >
        {label}
      </button>
    );
  }