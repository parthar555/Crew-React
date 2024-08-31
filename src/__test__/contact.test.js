import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";

describe('Contact', () => {
    it('should load contact page', () => {
        expect(<Contact />).toBeTruthy();
    })
})
