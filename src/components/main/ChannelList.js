import { Component } from 'react';
import Channel from './Channel'

class ChannelList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: [
                {
                    id: 1,
                    imgSrc: '/images/1st.png',
                    name: 'Первый канал',
                    programs: [
                        {
                            active: true,
                            time: '13:00',
                            name: 'Новости (с субтитрами'
                        },
                        {
                            active: false,
                            time: '14:00',
                            name: 'Давай поженимся'
                        },
                        {
                            active: false,
                            time: '15:00',
                            name: 'Другие новости'
                        }
                    ]
                },
                {
                    id: 2,
                    imgSrc: '/images/2x2.png',
                    name: '2х2',
                    programs: [
                        {
                            active: true,
                            time: '13:00',
                            name: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
                        },
                        {
                            active: false,
                            time: '14:00',
                            name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
                        },
                        {
                            active: false,
                            time: '15:00',
                            name: 'БУРДАШЕВ. Сезон 1, 20 серия'
                        }
                    ]
                },
                {
                    id: 3,
                    imgSrc: '/images/rbc.png',
                    name: 'РБК',
                    programs: [
                        {
                            active: true,
                            time: '13:00',
                            name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
                        },
                        {
                            active: false,
                            time: '14:00',
                            name: 'ДЕНЬ. Главные темы'
                        },
                        {
                            active: false,
                            time: '15:00',
                            name: 'Главные новости'
                        }
                    ]
                },
                {
                    id: 4,
                    imgSrc: '/images/amedia.png',
                    name: 'AMEDIA PREMIUM',
                    programs: [
                        {
                            active: true,
                            time: '13:00',
                            name: 'Клиент всегда мёртв'
                        },
                        {
                            active: false,
                            time: '14:00',
                            name: 'Голодные игры: Сойка-пересмешница. Часть I'
                        },
                        {
                            active: false,
                            time: '15:00',
                            name: 'Секс в большом городе'
                        }
                    ]
                }
            ]
        };
    }

    render() {
        const channels = this.state.channels;
        return (
            <div className="channels">
                {channels.map((channel) =>
                    <Channel 
                        key={channel.id}
                        value={channel} />
                )}
            </div>
        )
    }
}

export default ChannelList;