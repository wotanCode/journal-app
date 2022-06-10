export const JournalEntry = ({ entry }) => {
  return (
    <div className='journal__entry pointer'>

      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(https://www.enbuenasmanos.com/wp-content/uploads/runa-l.jpg)`
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="jornal__entry-title">
          Un nuevo día
        </p>

        <p className="jornal__entry-content">
          adfgsdghwsgfhsrg dfagdf erg wrgfds gerg
        </p>

      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>

      </div>

    </div>
  );
};