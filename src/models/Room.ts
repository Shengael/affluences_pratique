import {Reservation} from "./Reservation";

export interface Room {
    opening_datetime : string,
    closing_datetime : string,
    reservation: Array<Reservation>
}
