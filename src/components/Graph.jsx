import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
} from 'mdb-react-ui-kit';
// import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import backgr from '../assets/1.jpg';
import Chart from 'react-apexcharts';
import '../App.css';
import { useTranslation } from 'react-i18next';


function Graph() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const [state, setState] = useState({
        series: [
            {
                name: `<b>${t("ProductionEconomicDynamics")}</b>`,
                type: 'column',
                data: [2.5, 2.8, 3.8, 4.6],
            },
            {
                name: `<b>${t("IntellectualDynamics")}</b>`,
                type: 'column',
                data: [ 4.1, 4.9, 6.5, 8.5],
            }
            // ,
            // {
            //     name: 'Revenue',
            //     type: 'line',
            //     data: [20, 29, 37, 36, 44, 45, 50, 58],
            // },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: [1, 1, 4],
            },
            title: {
                text: 'Statistika (2022 - 2025)',
                align: 'left',
                offsetX: 110,
            },
            xaxis: {
                categories: [  2022, 2023, 2024, 2025],
            },
            yaxis: [
                {
                    seriesName: 'Income',
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB',
                    },
                    labels: {
                        style: {
                            colors: '#008FFB',
                        },
                    },
                    title: {
                        text: 'Income (thousand crores)',
                        style: {
                            color: '#008FFB',
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                {
                    seriesName: 'Cashflow',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396',
                    },
                    labels: {
                        style: {
                            colors: '#00E396',
                        },
                    },
                    title: {
                        text: 'Operating Cashflow (thousand crores)',
                        style: {
                            color: '#00E396',
                        },
                    },
                }
                // ,
                // {
                //     seriesName: 'Revenue',
                //     opposite: true,
                //     axisTicks: {
                //         show: true,
                //     },
                //     axisBorder: {
                //         show: true,
                //         color: '#FEB019',
                //     },
                //     labels: {
                //         style: {
                //             colors: '#FEB019',
                //         },
                //     },
                //     title: {
                //         text: 'Revenue (thousand crores)',
                //         style: {
                //             color: '#FEB019',
                //         },
                //     },
                // },
            ],
            tooltip: {
                fixed: {
                    // enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60,
                },
            },
            legend: {
                horizontalAlign: 'left',
                offsetX: 40,
            },
        },
    });

    return (
        <>
            
            <div id="chart" className="my-5 ">
                <Chart options={state.options} series={state.series} type="line" height={350} />
            </div>
        </>
    );
}

export default Graph;
