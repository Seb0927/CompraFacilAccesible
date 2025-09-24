const Blob = () => {
  return (
    <div>
      {/* Justification:
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden */}
      <img
        aria-hidden='true'
        className='w-80 h-80 md:h-108 md:w-108 lg:h-128 lg:w-128'
        src='/assets/vectors/blob.svg'
      />
    </div>
  );
};

export default Blob;