import { GuestBook } from './guestbook';
import { Contact } from './contact';
import { Location } from './location';
import { CardDetail } from './card-detail';
import { Itinerary } from './itinerary';

export class Card {
  public Id?: string;
  public UserId?: string;

  public CardName: string;

  public CardDetails: CardDetail;

  public DateCreated: Date;

  public Itinerary: Itinerary[];

  public Contacts: Contact[];

  public Location: Location;

  public GuestBooks: GuestBook[];
}
