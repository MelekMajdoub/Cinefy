import React from 'react'
import '../styles/MainsSreen.css'
import cap1 from "../assets/cap1.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import DownloadIcon from '@mui/icons-material/Download';

const MainScreen = () => {
  return (
    <div className="MainScreen-wrapper">
        <div>
            <i className='Left-icon'><ArrowBackIosIcon fontSize="large" /></i>
        </div>

        <div className="Container-wrapper">
            <div className='FilmTitle'>
                Film Title
            </div>
            <div className='FilmInfonHandler'>
                <div>
                    2023
                </div>
                <div className='seperator'>|</div>
                <div>
                    30min
                </div>
                <div className='seperator'>|</div>
                <div>
                    Short
                </div>
                <div className='seperator'>|</div>
                <div>
                    Director's Name
                </div>

            </div>
            <div className='FilmDescpription'>
                The film deals with the eternal doubt of humanity and raises the issue
                of the true nature of human beings. Is it an absolute good sullied by
                corruption, or an absolute evil camouflaged by hypocrisy and interest?
            </div>
            <div className='BottonHandler'>
            <button className='watch-button'>
                <i className='icon'><SmartDisplayIcon fontSize="large"/></i>
                Watch Now
            </button>
            <button className='Download-button'>
                <i className='icon'><DownloadIcon fontSize="large"/></i>
                Download
            </button>
            </div>

        </div>
        <div>
            <i className='right-icon'><ArrowForwardIosIcon fontSize="large" /></i>
        </div>

    </div>
  )
}

export default MainScreen