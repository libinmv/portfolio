import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'Self Hosted Portfolio Website',
    description: 'Created a self-hosted portfolio website (React + TypeScript) using Vite. The website is hosted on my personal server and ingress is managed using a cloudflare tunnel. ps: You are currently viewing this website.',
    technologies: ['React', 'TypeScript', 'Vite', 'Cloudflare Tunnel', 'DevOps'],
    github: 'https://github.com/libinmv/portfolio',
    demo: 'https://portfolio.libinmv.in',
    image: 'https://user-images.githubusercontent.com/45159366/152699307-1c4ebfcd-a2b0-456c-9a84-01ac255e3782.png',
  },
  {
    title: 'Resume as a static website',
    description: 'Set up a personal server using Ubuntu Server. The server is used to host my portfolio website, a Nextcloud instance, and a Pi-hole instance. The server is managed using Ansible and Docker.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/libinmv/resume',
    demo: 'https://resume.libinmv.in',
    image: 'https://cdn.cssauthor.com/wp-content/uploads/2020/02/Editable-Resume-Template.jpg?strip=all&lossy=1&ssl=1',
  },
  {
    title: 'Lunch Booking Service',
    description: 'Implemented a lunch booking service for employees of entri.app. Dockerised application implemented using FastAPI and Slack API. Redis Database is used for CRUD operations. Consists of a QR Code generator using Python and a QR Code Scanner using Javascript.',
    technologies: ['FastAPI', 'Redis', 'Docker', 'Slack API', 'Python', 'Javascript'],
    github: 'https://github.com/libinmv/foodindo-app',
    demo: 'https://github.com/libinmv/foodundo-web',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Automated External Defibrillator',
    description: 'Implemented a 12V to 2kV secondary side boost converter model to build an AED to be used in public transport. Arduino Mega based H-Bridge program was implemented. Hardware prototype was developed for the project.',
    technologies: ['Arduino', 'C++', 'Hardware Design', 'Power Electronics'],
    github: null,
    demo: null,
    image: 'data:image/png;base64,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',
  },
  {
    title: 'Light Fidelity',
    description: 'Implemented a LiFi model that transmits data wirelessly. Can transmit data in both dark and lighted rooms. Transmission lag is minimal due to speed of light. Based on Solar Panel receiver and LED transmitter.',
    technologies: ['Arduino', 'C++', 'Hardware Design', 'Optical Communication'],
    github: null,
    demo: null,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEREhMSEhAVFRUVFRYVFRcXGBUVFRcVFRcXFhUVFRgYHCggGBolGxUVITEhJikrLi4uFx8zODMsNyguLisBCgoKDg0OGxAQGyslHyUtLS0rLS8tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKsBJwMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAMFAQIGB//EAEcQAAEDAQQGBggBCgUEAwAAAAEAAhEDBBIhMQUiQVFhcQZSgZGhsRMVMjNCcsHRFBYjYoKSssLS4fAHU3OT8WODosM0Q1T/xAAbAQACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EAD0RAAIBAgQDBQUFBwMFAAAAAAABAgMRBBIhMQVBURMyYXGRFCIzgbEVNIKh0QYkUmLB4fAjU/EWQmNyov/aAAwDAQACEQMRAD8A88XQEAQAIAEACABAAgAQAIAEACABAAgAQBlrSchKCL23J2WKocmHtw81OVmbrU1uydminnMtHj5K2RmLxlNbE7NEDa89gjzUqmZPGPkiR2imbC4do+ynIiqxk+iIamiDseO0R5KvZmixq5oXfo2oNgPI/eFDgzVYqm+ZA+zvGbCOwqr0NlUi9mRILXBBIIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAErLO92TSewqbMo6kFu0Ts0ZUOwDmR9FKi2ZPFU1zJ2aIO147BKnszF41ckMM0VTGZJ7fsrKCMpYub2sTssdMZMHbj5q2VGTr1HuyYADIKTNtvcygg1e6BKC0Y3YPdA7QO8gfVGwRjcKhIiNphDYQine5guIiYMkDDD6qNUTZPY3UlAQBo+k05tB5gFRZFlOS2ZA/R9I/DHIkKMqNViai5kD9EN2OI5wfsqumarGS5ogfol+xwPeFGRmscZDncXfYKo+AnlB8lVxaNliKb5kD2EZgjmIUGiknsaoLAgAQAIAEACABAAgAQAIAEACANmUycgTyBKCrkluTssFQ/Ae2B5q2VmUsRTXMYZol+1wHKT9lORmUsZDkmTs0Q3a4nlA+6nszJ4yXJE7NH0h8M8ySrKCMpYmo+Ywyk0ZNA5ABTZGTnJ7s2UlQQAIAEACABAAgDWqJGH94oLQdnqauBOwDFpznIg7uCholNRe/Jg6kN22TPahoFNoy6nlAAxBRYhS3v0N1JUEACABAAgAQAIAEAtCJ9mYc2DuUWRdVZx2Yu/RdM5SOR+6q4I2WLqLfUgfojc/vH9VHZ+Jqsb1RA/RdQZQeR+6q4M1ji6bF32SoM2HunyUWaNlVg9miIhQXWphBIIAEAZAQQ3YbYxgzbPMn6K9kKyqSezGGV2typt7se9SvIyalLeTJfWB6oVsxmqK6h6wPVHiozMOwj1D1geqPFFw7CPUPWB6o8UXDsI9Q9YHqjxRcOxj1D1geqPFGYPZ11A6QPVHioc7Fo4eL5h6wPVHipuV7GIesD1R4ozE9hHqHrA9UeKMzK9jHqHrA9UeKLsnsI9Q9YHqjxRmDsI9Q9YHqjxRmZPYLqHrA9UeKLkOjEPWB6o8UXBUI9Q9YHqjxRmZHs8eoesD1R4ouSqEeoDSDuqPFCnctLDxXMPWB6o8UZivYLqHrA9UeKLsnsI9Q9YHqjxRmYdhHqHrA9UeKMzDsI9Q9YHqjxRcjsYh6wPVHii4dhHqHrA9UeKLh2Eepj1g7qjxRn1sW9njlvcz6wPVHijMyjoR6h6wPVHijMyewjbcPWB6o8UXK9hEPWB6o8VOYnsI9TV9uJza088UN3LqlbZshe5h/+pvZI8lVpGilNf8AcxWuwDECPFUaGKc23ZkCg2MtQQ9hsLQTMoIBBCBAAgsCCGCCAQSP0tB2t7Q5lkrua6CCKVQgjeCBiFlUqRQxSpTldpC9ssVWiQ2rSfTJEgPa5hI3gOGK0Uk9jGUXF2ZApKAgkEACABAXBAXBALYEEE9jsVWsS2lSfUIEkMa55A3m6MFDkluaRi5OyGK2hLWxpe+y12taCXOdSqBoG8kjALOnUi9DWrSlHVoQWovuCABBAIJuCABAG1Km5zg1rS5zjDWtBLidwAxJQSr7IsPyetv/AOK0f7VT7LFVY5hh0J5NiuewtJa4EEGCCCCCMwQcithexhBFwQSCCAQRcEE3Iq+SrI1pd4XVRky1BD2GwtBIygLAgNgQQCCwIIsCAR2PRuroizxUrVH1qoxxpO9E0/otPtHi7sAWUlOWiGabpR1er8jv9HdKLNaGl1NziAbplpBmAfquZiMVTw8stS93rsdPD0ZYiOanaxVab6U6LqB9C0S8AkEejcYcNrXDEHiE3RUpRU489RWtOmpOE+Wh5rpqhZWumy1nvYfhewte3tiHDuPmm4t8xCeRP3WVysUBBDYIAEACCbAgCy0JQsjnTaqz2MHwsYXPd+tENHeeWapJy5GkFC/vM9K0L0q0ZTDLPZ7zATDQKbhJO1zjiTxOKUr3pxdSeyHqEoSkqcOZaaR6UWWztDqj3AEwIaSZidiWw2Jp4ltU+Wo1iKUsOk6nM8/6SVNEWialCo+jVOJApO9E48Wj2Txb3FdGOdbnMqOlLWOnyOPWwtcEBuCABBJNY6bHPAqVPRs+J10vIHBozPcobtsSrX1PQuj+ndD2IfmjULyIdUdTcXnhMao4CBzS8oTluNwqUYbfQ613SGzin6UudcuX5un2YnLlsXNjjqUqnZK9722OnLDTjT7R2ta+5yHSHTWh7aJqGo2oBAqtpuDxGQOEOHA9kLpxjOOxyqk6Mzz61U2tcQyp6RoyddLJHFpxBW621FWktiJSRyBAAggEARV8lWRtS7wuqjJlqCHsOLQSsCABAWBAWBAbAgkEFQAlQ2krslanRWCxVQKYoPM1AQYdc1gQCwkkCdZh/XC59SMajvJXHabnBWgys0pRYLjmGSWNL8QQHkkwMBsuyNhkJmjLkzCouaEEwZAggEACi6JBSVBBIIIBBNhywUCZcNgnsGZH970tXafum1NPcetLKlQE1HOwaCL0mQSAIntPYVhSjGm/dRtUc6i95lKRCfWwm0CkgEEoEACCAQSS2enePAZrKrKyLwV2XL2VbpZeJY26Yvamti0gGMwZySKjHNmsr9Rtynly3duhT2yiGPcAZEmDvG9dCnLNG4pNWlYhVygIAEBzBBHMEARV8lWRtS7wuqjJlqCHsOLQSBBAQobS5llGT2T9AhGZdSckuj9GCMy6kZZLdP0BSRYEBYe0RZfSVGtm7ecGAxOLjA8SO9YVpcjWnG7uXdnq02uo+jcaVS65r3TEPutDbxcSIFQPMiIDm5EYLDCaTIHFtdjKYbc9HTe5zsxDWN3CRJZtnWqFTFtO6IfvKxzzmwYTyd1cU2MATki6DK29jeAM8TuGXafsozXLZbbmA/gPLu3KMqWpLk3o0ZuA5Hs2/wBVObqRk6GilNFGmCkLGzGyQFWUrK5MVd2Lqz0A0S512aZLIOftNg8yIjikW7saSViZ72wPSQfzWpAIx1hjjneHLAqES31KfSFAtIJ2gHvEg9xCaoyvoL1I2FVuUBAAgqCABBJaWCz4HgLxG0iQCBymUlUldjMFZDrqjR6QMdqww3djogOALtYYk9krOxe+4ppNgqB1RrQ0NLRGAOIOQGHwkrWlLK7FKizK6KlOC3iCABBDBBNwQQRV8lWRrR3F1UaMtQQ9hxaCQIBBKVjCMq08yvsPyqzp4enldt/qhkUdSZN6fZjZvWroUUr5V+QtHE4iUrKTfqxV58wl504xqwyq2/0GqdWc8PVzNvu/UynTntmWtkwolKyuC10LykKIoEQRVDsDrYjVw6oEXyds3YwmEZO7uNKyj4mgrxTLAPacHOO8NBDQBsxc4ztkbsYC9lYltldjxTDKd1wbddAADjDQMs8Q4ycdYDGAUFpO+xWaQoFpMgggw4EQQeIOSYoy5GFRHSaL6K2WpRpVKlSoHPaHGHNAnhqrCbak0jp0tYJ+Az+R9i/zav7Tf5FXOzTKiQdCLKcn1d/tNy/YRnYZUYf0JsoEmpV/aZ4aqh1GTGF3ZHPdItE0aDKL6LnkVQ865GTbsZARmUxh5ZtRPiEHTeRlImjnD+jKIJlxgGdw2HacBJgSlq0+RtSj1GwQHAE3mtcctoB2bp+qwNOYUiyH3sDGrEwDjgO27nsnaglNcyCtrTJz/wCB5K0ZOLuirV0VhEYJ1O+os0CkAQFgQQS2anJ4BZVZWRpBXZa1rkNukzGtnnA4b73YAlBh25GPSjU1cG573YycfBABXILjcBjdEZDWMCY2nghBuyqtFO6eGYTlOWZC8lZka0KAgAQQCAIq+SrI2o94XVRky1BD2HFoJAgkls1MOcA5waImTG/LFIyqShUk0r7fRnWw+Gp4ilThOah3nd+aHDaDjWvi97F3DLemqtKNaNpCGCxlXBVW6NtmrvXcTttINMNeHDAyO3BZ1vi0/n9C2GbeHq3/AJfqRJgVGrHT+LuS9aXI1gubLC102B2o4lpa0iYvCWglro2gyOxLm3PQf0g2pXd6Rwa1xEESSSZJkntgDYGtGxJSx9JStr5ncjwDFThndl4a/oJ1yTcYGYsaQYALibznl0jEgNI5BqbjJSipR2OPWpTpTdOas1uQVqhfF4kw0NE4m6MhPDZwgbFdOzMXqdfo9gFms4NzCnGsSNuyFWUs0mx+kmqa8iW43/pd7vuoLjNrtwpejBB/OC6C3JpDSZJJwbhE8Qs6l8ja6GkLZkmV9otJf6MEg3X0j303XiTzVEm6MG97am2Gn/rVk9Fy9Sh6Vf8Ax7F8tT+BO4TunP4s06zt1ZzlNkkBNTllVzlxV2WrKWqSPhgEcDt5TA7QkdxlLQ3ovYGuDmySNU4YEA92Jb2AjbgArWNKZbrSJw1fmkY90oABVN0twImeRwxG7KEBcRtlPb2FM0paWMprUraVltFUPcxj3BhYHBoJINQ3WNAGLidwXKq1a2Zpt+tjvUsPRyJxSfiwsdRxkOzG/Pbge5PYKrKaebkc3iFGFOScVa4ynmc8srJSAgOMAnWMTHZtSU55mbwSRK3VcJAN12WYMHKdowVC3MzXeHOJAgGPLE4Rmce1AN3ZmpV1y5mrjqxgQNmW1BLfMWtbbwJ257ueAWlKWWRnNXRXpww5ggkEEAgCKvkqyNKO4uqjRlqCHsOLQSBBJmOKVeeFSTUb3t0HP9OpRhBys1fk+ZMK5uejkRM5YytO1n/A/VfqZez0r37Rej/QgcPMLJqcqkW1a1+htF0oUZxU027cnyfkZY2SAmpOyuJpXLWhRLiGMaSTgABJKSbN0uSJ6Fmdi44XHsa4GbwLidkYeyQZ4b1jX+HLyY3go/vFO/8AFH6o6zQ+i2Vmuc4uEOgRG4HaOK86loe5xWKlSkopHO1rd6G0vdSxDSWC98QaczdIOYBERkF38NTyU0jxOOxUq2IlUfl6CVmY1zwHG60mXEQIGZj6DsW4kjuNGVHNsdNzRLhTkDZOKVlNpysdOjGOSOZ2ViPRdte+pdvl2qC4EYNkGIMbws41pucYpXjZ3fiTThHLKWbW+iLKpUIOaaIMCqd6AOS/xEMiz/8Ac/8AWmsNzEMbyOZsdOBO/wAkVpXdheC0uMLK5cyWkZiJx7N6AMIAmtFUOuw2IEHLH+8e+NihIs3cjtFDAT8TZ5YkDyntVoys7lXG6Ow6C6Us7aDKD3MbVFUtDSNZxLr1MjfBdAOyEnjKM3NzS0aOpga8FTUG9bnN9NOj34Ws6qzGnXe54/QecXMPDMjgSNiZ4fUjka5i3E4TzqXKxR2Rkmd3mnKsrKxzqau7j4aTkJjE8BvKVNjIYSCYwET25IA1UgTUq5a1zYkOieye/OeYHbVom+ljWmyQ4zF0A8ySBHiT2KdgRWWmnB4FN05XRhJWZ0nRro8yqwVaj6Ra5phr3Fl0h0ZjM4ZcVy8Tj5qq6cYtW53sn5aHb4fhKKp9pVad+Vk2t/HmWWmdB2ZlJ7mUqQLRe1Kr6hIGYAIGKwWLryko66tLdvf5D6p4KmnOUE0k9LJf1OGqESYEDcu5BNRV3dnmK8oTqOUFZcl0IK+SmRFHvC6qMmWoIew4tBMEACCGgQTcEAO6OpiQXSASASBJDZ1iBtMJatO7sa01zZYNqmjVcWFrrpe0TD2uaZaeDgQe2Vga3yvQl0dZatd7rrsTrPJJx1pl3WM481nUklGz5kxm4NSW6d/Q72yaOuWWadcBxY68SBPpmtkgNnIgYYzELk+zxzeB3JcXlOn2srOS5cn6M4K3CpSL6LwDJvYjEEwbzTmCQI3Eb8CuvTleKOE6mdt23bZHam0rlI0ybxB9IDOBEY5Rib0QTgGzjKuDtYZpaZtVJrWB5a0NF0FjfZ2ES3EcVj2OtxuOISVrCT+k1taSPTD/AG6ff7KbjQTWhg8XZ7GHdKbZh+fB/wC3Tw/8VKoJlnibJOxj8qLZ/nD/AG6f8qn2cr7Z4C1r0lXtJaKr712Y1WtiYn2QNwUqPZJsyqVVV0sMGnDQ7CCSI3XY+4WG7C1jevXvBogANEeABPhPMneoSBu5G95MTsEdknPvjsCkG7mGgnACTuGKASuS2eiHXtYCBInb4/32KGyUrkIxUN2V2EU5NJbs7voDYWCq8wJFIidsuIBPdI7VxsJWlXrTcny0XQ9djKEMJhoQguer5vTmSdPHFr6VMExdLzxJN3wjxKX4guzcYroO8FtKE5vrYobRYA+lgBea0uB2kgSW9qnAYmUKiUnoxbjODjVpOcY+8unQo6VctDgI1s9+RGHY4r0VjxieljRriJjaIPKQfMBAXNVJBsWRE5HHYcJI+h7lFybdTe0saHQwyMI2/Qf2d6gGtSXR9jZVfdeJAaTmRiCBs5rOtWlSjePU6PC8LSxFfJVV1Zvd+BfWDo7baONFrWiSQbzCcRG07kr9uYbZyfoyHw5xm2l+YxabHbrp/EEGmQWnFnxRhq47AhcWpVNKMtfJ7fMdwXDo1KuWsrxt1/Q4zSNkYwEtEQ6MycJ4pvCYmpUqZZPS3QvxnhmGw2G7SlGzulu3v8ypr5LoyPNUu8LqoyZagh7Di0Ex+ho0upemmW/nAA3Eh1NrXa24Frp7DuWFatkcV1aQ3hsKqsJycrZYt+duRXlbih0NanSa5zRQpwCRjenD9ZK5pPmMKlGxhjaZIHoKf/n/ADKJTlFXuWVGLY/To0zq+iYNU5XpEAxGKSU5N7m0qaUdCva+l6Ei6TVLs9gbq5Y8HCI+LPAJgx0y+JbdDj+cqD9AHucB9UviNkVL1xlKmJS6T0e+0VK1RpxbdhsYOwyBnDaByjCQm6U4qOrNqdp6LcQ0noKrQY2o66WuzIPsmQI45xhtB7dVNPY1nRlBXZX16xeRPwtawAZANED6k8SVczbuJWynhO7Nb0Za2MqkeYot0kispN7gpKjtkpwJ3+SVqyu7GsFbUcs7WlwDjAxnGNhjHZJgSsWaq3M0qRJuzEmJzjZPFSipqgDsf8O32e+9jmD0xBuudiCzC81o2HMneOSyqIZoNbcyu6V9HjZqk0wTSe4hm0tdnc+x3Dgo7SKXvMh4ecpWgmxCz2VzZDhBJbnnAxy/Zx571z8Xj4OLhDc7nDeD1VUjVqWSXLmdj0FP52p/p/xD7pHAO1R+R1eL60o+Zjp02a9M/wDS/icjijvUi/D9S3BfgSX839EUtjraxZGQDp5kiPBKqnakp33b/IalXviHStsk/V7fkU2l6bGvusGIxOfxAEDHdLsthG2V6bCzz0oyfQ8NjqSpV5xXX66iKZEwUAbPeTEnIADkMgglu5u2k4AVLoLZ743jONii+oWe4/oN5dWcTmWuJ5khK4z4a80dngb/AHl+T+qPUaHst5DyXh5bs6Mt2IdIfcn5m+ad4d8b5MZwfxfU8t0x7Lvn+pXq+H/F+TKftF9z/Eiir5LsSPFUu8LqoyZagh7DYWgkFS3VabYZULQ46wwgmC0Eg8HOHJxSuIpxlbMv85eh0MFWlTUlG2vgn9TVji5snMjcPotoaQFa8s1Rs6q02OoXuIYYLjHesE0bKcbEtm0fUGJYZS1WabsbwstRmnZngyWkCHfulZLcmTWUpbHZjUN0EDCceYH1WtWoqcczK4TDPEVezTto2Xeg7MaFW8XAgtLTGeMEHvASVXFxlG1jqS4DWt7sk380dLY6VnIcXVbga3VG0nYADiVj20LXuKR4NiHLLKLXjyKyrpmw0RDRVqPEgkNDZORxd7I5DvTMKE5a6GcY4bDtxim5LRnM6V0k6u7HBo9lszHE7ynKcFFC9Wq5sRWhiBCEBW1GQSE5F3VzBq2hZWDRzHloMwRJg8J3JavXdODZGEjLEYiNK9k3Y6GzdH2vbebMY/ENhg7FzJ4ucUm47+J3YcPoyk4qq9P5enzNa+g2scWm9OGRwx/VUTxkouzX5jVHgkasM8aun/r/AHI/VLNz+/8Aoqe3S6Gv/T3/AJf/AJ/uRWrRrGsc4XsBtOHktqOKdSWWwlj+E+y0u0z31Sta39SvsdqfSe2oww5pkHz7IwTcoqSszlQm4SzItNLdJKtoLS5rRdECC6OcE5pGrgI1HdyZ1cPxipQi1GK18yvtGkKjzJMcgAtI4Ggndq/mZT4vipKylZeB1v8Ahy/XfPUd+8xJVEo4t22yr6nTpSlPh8XJ3edlh0toOqVqQaJJbAH6x8FzsZedRJdDq8MqRhRk5bX/AEOetldtnBBGvu2yMMdwWmFwk6zs9kUx3EKWGi5LWT2X6+BzlWoXEuJkkyV6SEFCKjHZHi6lSVSbnJ3bNFcob0aZc4NGZKyrVY0oOb5Foxu7IyKDi4sa0uMkQAScOCHWhGCnJ2QZXeyM1A9gLHSBMkHKf7A7gphUhUWaDTB3WjHej/vT8h82pfG9z5o6/A/vP4X9Ueo0fZbyHkvCy7zOpLdiXSH3J+Zvmn+HfG+TN8H8X1PLdMey75vqV6vh/wAX5Mp+0X3P8SKKvkuxI8VS7wuqjJlqCHsWFme1rgXNvNGY34cUVIylFqLszLC1KdOrGdWN4rdfJnoVn6GNc1rgKUOaHQW7xP1XkKvGLScZZtH1PZUpYWPvQpJX8ET0OhxpuDmOY1wyLQWkciFH23y19SHDBt3dJeiID6YSfTOwBObtnatIcUcpKKvroVlHBRTfZL0RX/lRU69X9o/ddL2ar/Ec/wC0MF/s/Q0/KR2+p+0o9mq/xB9oYH/Z+n6mtktjKj3ENN4gkuOJOIzOZ2dypWp1Iw96V0M4PE4ariIxpU8r16dB5iQnsd+JusjQqtMCm0RcF52MwMDIJXXwkakkpZtOh5PimIwynUoqnafXTnZlMugcEFIAgBe2U5E7vJa0pWdik1pcu9EMgN4t/hSGKleMjThUbYym/wCY7DQ9QChHCt4lseRXPxTtGL8P0O9ho5q014v6sNJkO9G/aWAHm3BTiFqmjqcLk8koPk/7f0EkqdQT0t7l/L6hN4P4hxuOfdfxI5VddHkQUgCAOl6IW00bzwAc2wcM7p+i5lbDuWIz8stvzOlDiMaWE7G15Zr+FrWLy36RfUqU6jW3S0YbRtz71zcbRnGrFQV3bodbheNpVMLOVZqKv18EcXpq0GpXqPcACTBiYwAbhJywXcw0HCmlLfmcHGVY1K0pQvbS1/ISTIqb0bsi/N3bGfMLKrny/wCnuTG19S4sVloAhzahJ3avLLNcLGYnETg4VIWXzGacI3umW9ksgY91XrNEk4ZTJnu7lzKuJlUpxpSezZdRs7o5u3VKrrxcNWSQIGGOGOf/ACvQ4RYaLSg/et6mNTPbUl6P+9PyHzCYxnw15o6XA/vP4X9Uel0rQLowdkPgfu+VeKlSd27r1R03LUR05aGupECZlvwuG3eQnsBSlGrd226m+DknV9TzPTHsu+b6len4f8X5Mp+0X3P8SKKvkuxI8XS7wuqjJlqCHsNnJarcRke66O91S/02fuhfMK/xZeb+p7GHdXkMLIuck9uo75T5Jqh8WPmilTuS8jhAvdHmAUgWGhfeH5D5tSmM+F80dXg33teTLymMQN5hclq6PX3tqWbtEPGbm+P2WLRi8ZHozm+lFC49gmdUnxXZwHwvmzyXFXmxcpWtdIpE8c4EACAJKFO8Y2bVnUllWheEbstrI2HAcPolKkrwbJwME8ZTi/4ixpMJ+Ihc5zb3Z7v2Wgn3F6I39CesfFGd9SfZqP8AAvRG9OyPdkSeUqO0d0r7lZ0sPBXlFL5IV0nQcKTyT8AcAZxaXASE1hZPtVfx/I4vGJYfsEqaV7rbocwusjzYKQMtE4KrdiUr6HQaKbDSOP0St76kV1ZouKWQWiEpHKaUZrOd+kZ7yilLWx0ZR91MRW5mCALjQ7Gmo1gxjFxAOMf1Xnceqzg6s9FyQ7CUY+6i20vaobEe0YG4bcVzMPQlO8ly1NVFpKT2bsc9UtBa6HGWnwBXdo4aFWkqkFaS/wA/MxqTcJNPVE3R/wB6fkPm1O4z4a80PcD+8vyf1R6hS9lvIeS8LPvM6j3KzTFlY2k4tY1pJEkAAnGcSuhgas5VUpNtWZthElUukeZ6Y9l3z/Ur1XD/AIvyKftF9z/Eiir5LsSPFUu8LqoyZagh7DRyWq3Ense7aO91S/02fuhfMMR8WXm/qewh3V5DBWJdI5Wv7DvlPkmsP8WPmitXuS8jgQvdnlwUgXGg6YuudGMxPCAY71z8Y3t/m53+CwjdTtrdq/hluWlJsuA3kea5x6OXdZ1VoOHbjyg/0WbsclbnFdM3Avpjc0z3grrcPT7M4fEZxlXsuS1OeT5zwQAKAH7NTgcSlKk8zGIqyLKk32Tw+iXcvdaJwa/e6b/mHKDwBiUnbxPbus/4Jfl+oxSr051pjgYjvBQo66tGNavWVuzg35/8j1i0hQpkkF2I247eACpKku1hJNWT19BKs8TWg1Knb/PMqNL2hrqMA5WdrD8zXyeyE7hviR85P1/5ONjMPVpUFnjbuo5NdVHLBSAzY6e3uS9aXI2prmXOjjg7mFlExxG6LWzHDkf6/VarUTkrHP2psueP0neZWN7M6i7qKp7YJCcjK6uYSVnY1UkD+hrYKVQk5OaWnzHiAO1IcQwzr00lumv7mlOWVkxeX2Z7nZipPeW/cpdQjTxyhHbJY6G+BbfKWn5FbVfeM8F0MPRVKGU59WeeVyw6P+9PyHzas8b8P5o6vA/vP4X9UeoUvZbyHkvCz7zOq9xPTXujzCbwHxfkzbC/EPMekDIBO931XrOGu9X5Mx/aH7n+JHO18l25HjaXeF1UZMtQQ9hs5LVbiMj3XR3uqX+mz90L5hiPiy839T2MO6icrE1OWtHsu+U+RTWH+LHzRnV7j8jgQvdnlwUgPaLt3oiZktIyEe1Ig9wI7UvXo9pGy3HsBjXhql3dx108XpcvrBpKm8F8OFwgnAHCeB59y588Ll0ckd6PFnVi3ClJpbu60Oj0raRSpue7JoJ5nIDtJA7UrTh2k1HqUq1FThKT5Hn2kqrntpucZLg4k8SQu9Tio6I8nGTnOcnu2IrQuCAJbNTk8AsasrIvBXY+lTcsbKMuX0S9TustgfvUPMao0hjISiZ7ozLJjCRmIKu4ySuzKnWjOcoLeO5v6MbgqGorpVgFJ+Gz6pvB/FOPxz7r+JHLLro8iZa2TChuyuTFXZYsbAhJN3dxlDujjiRw8lMRfEbXLSxuxeOIPeI+i1iKVNkyktPtv+Z3mVlLc6NPuoStlPataMuRWouYomDE3pNBc0HIkA8iVnVuoSa3szSkk6kVLa6OkGixc9HfN0mYgZ889i837RUdTtb+9ax6lYakqfZ293c5uqAHEDIEgcpXpad8qvueVq2zu21yw6P+9PyHzCXxvcXmdbgf3n8L+qPUKXst5DyXhZ95nVe4npr3R5hN4D4vyZthfiHnenKd5jh+lhzxXp+HSy1vkzLjyvhLeK/qcpaMl6CR4yl3hZVGTZmY5oKydky9Oj2b3eH2W2VHJdaTOusfSu0ANYGU4a0DJ0wBA+LNcCvwDC3cryu/H+x1aXGK+1lb5jP5VV+pT7nfzJb7Cw/V+v8AYY+1q3RCL9KvIIhuII27e1XhwahCSkm9PErLitaSaaRT/gm7z4fZdawj2rD8E3efD7Isg7Vk1nsFPNzjhsmJwJ3cB3rOpGVrR0NqFenGV6sW10Tt68xtlYwQ0hgAF1oAiZHDFLSwkd5Nvr6HRjxqtrCnFRvZRS2WvPrdaF90iYKtnGtAwJiMYB1e+O5I4KS7ZeNx/ikJRoO6d1b/ADyOUq0A4NBnVED+q7WVHl4yavYj/BN3nw+ymyLdqw/BN3nw+yLIO1Y7QsDWjM+H2Sc5XY1CTSJPwjd5VNC2Zk9NsKkqae4U5ypzU47rU3qV3AYR4/dFLDU72Y9Pi+LSumvRCZtBmbok55/dM+x02rO4rHjGKjKUk1d76IkFufw7j91X2GkX+3cZ1XoiO0Wlz2lpiDnCvTwtODujDEcUxGIhkqNW32SEPwTd58PsmLCfasZsuj25yeGSXrNbI3pSe7GPwjd5WGhrmZ1uguh4Ac6vIJGqAcW7yYwnhisJ1bP3RuOFzx98l/JR7XEsqB0tEzqyQXQABMYRnvV44hcxargJONovbqctpHRxZVe14IcDJEg+1rDLgQtLqWqKLNBZZboWNjadpUrTYlyEH2BoMSfD7JyNmrijm07Gv4Ju8+H2UuKegKq1qWf498RhMZ7ee5IrhlG99TovjFfLayKz8E3efD7J+yOb2rJ7Gz0Trzc4jHj/AMLKrRVRWY1hMfPDVM8UnpYvW9J64AEU8BHsu/mXL+wsP1fqMPi9W2yuRWrpDWqNuuDI4A7O1aUuD0KbzRbLUuNVoSvZFRaBfEHfOCcpYWNOV0yuL4xVxNPs5Jb3KHTliaxt4TiQNm4roQfu2OdSk3MpVYaNqeY5hCKT7rOnKYOKOUGQOaTqTzSGqccsSRZmgIAEACABAGQVEldNFoSyyUujuNt0gYc0iQTlPdszG9c94BKSlCVreB3FxtypyhVhmvfnbR8vG3UTXROCCAJbOyTyWVWVlY0pRu7jaUGgQAIAFICVVkFOQldXE5xyuxorlQQBsxsmFWTsrkxV2OtEJJu7uOLYyoJGvWNf/OqftO+6jLHoX7WfUsKXSe0NaG6hgASQ4kxhJN7NU7GJssVO1istlpdVe6o6JdExMYADbyV4qysYTk5O7IFJUhtLNq3oy1sY1o8xVMi4IAEACABAAgAQBV9I/dD5x5OV4bmtHvHNLUaNqeY5hCKT7rOsoMk8lerKyOVSg2xtKDVmCCLMEBZggLMEBZggLMEBZggmzBBFmEICzHaVOAk5tyY5CNlYkhUsWCEWAwiwAiwEVoZI5LWlKzsZVY3QomhezBAWGbMzalqzu7G9GOlxiFjY2CEWAIRYAhFgCEWAIRYDBCNUQ1fQRqMgwnYu6uKSi07GqsVswQFmCAswQFmCAswQFmVfSP3Q+ceRV4bm1HvHNLUZBABCACBuQAQNyACBuQAQgAgbkEBA3IJCEAEDcggIG5BIQNyAMXRuCCAujcEAF0bggAujcEAF0bkEhdG5BBmBuQAQNyAMXRuQAXRuCAC6NwQAXRuCAC6NwQAXRuCAC6NwQAXRuCAMwNyACEEhA3IAIG5BAQNyCQgbkAEDcggIQSCAP//Z',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-padding mx-auto">
        <h2 className="heading text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <GitHub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <Launch />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 