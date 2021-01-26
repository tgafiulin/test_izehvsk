function Channel(props) {
    const {imgSrc, name, programs} = props.value;

    return (
        <div className="channel">
            <div className="channel__logo">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="channel__info">
                <div className="channel__name">{name}</div>
                <div className="channel__program">
                    {
                        programs.map((program) => {
                            let className = 'program';
                            if (program.active) {
                                className += ' -active';
                            }
                            return (
                                <div className={className} key={program.time}>
                                    <div className="program__time">{program.time}</div>
                                    <div className="program__name">{program.name}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Channel;