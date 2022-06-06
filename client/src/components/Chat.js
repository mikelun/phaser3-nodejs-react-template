import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 500px;
  max-height: 50%;
  max-width: 50%;
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #1d3557;
    display: flex;
    border-top: 2px solid #555555;
    justify-content: space-between;
    align-items: space-between;
`

// set padding for each item
const LeftFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
`
const RightFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export function Chat() {
    return (
        <Footer>
            <LeftFooter>
                <Button variant="contained" sx={{ m: 0.5 }}>Text</Button>
                <Button variant="contained" sx={{ m: 0.5 }}>Text</Button>
                <Button variant="contained" sx={{ m: 0.5 }}>Text</Button>
            </LeftFooter>
            <RightFooter>
                <Button variant="contained">Text</Button>
                <Button variant="contained">Text</Button>
                <Button variant="contained">Text</Button>
            </RightFooter>

        </Footer>
    );
}