import React from 'react';
import ReactDOM from 'react-dom';
import Box from '../Box';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("Box module should render without a problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Box />, div);
})

it("Box module should render correctly", () => {
    const { getByTestId } = render(
        <Box 
            boxColor="green" 
            boxNumber="Box-32880568" 
            imageSrc="https://placeimg.com/640/640/animals"
            handleDrag={ () => {} }
            handleDrop={ () => {} }
        />
    );
    
    const descendant = getByTestId('box-image-tag');

    expect(getByTestId('Box-32880568')).toBeInTheDocument();
    expect(getByTestId('Box-32880568')).toContainElement(descendant);
    
    expect(descendant).toHaveAttribute('src', 'https://placeimg.com/640/640/animals');
})