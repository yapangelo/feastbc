import "./SponsorTierList.scss";

const SponsorTierList = () => {
  return (
    <div className="sponsortierlist">
      <h1 className="sponsortierlist__title">SPONSORSHIP PACKAGES</h1>
      <div className="sponsortierlist__content">
        <div className="sponsortierlist__tier">
          <h2 className="sponsortierlist__tier-title">Platinum</h2>
          <ul className="sponsortierlist__tier-details">
            <li className="sponsortierlist__listitem">$1000</li>
            <li className="sponsortierlist__listitem">
              194mm x 132.5mm AD PAGE DIMENSIONS{" "}
              <p className="sponsortierlist__listitem-fineprint">
                {" "}
                (7.6" x 5.2")
              </p>
            </li>
            <li className="sponsortierlist__listitem">INVOICE ISSUANCE</li>
            <li className="sponsortierlist__listitem">
              4 TICKETS & RESERVED SEATS
            </li>
            <li className="sponsortierlist__listitem">
              VERBAL ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LINE TEXT ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LOGO DISPLAYED ON BIG SCREEN
            </li>
            <li className="sponsortierlist__listitem">FLYERS</li>
            <li className="sponsortierlist__listitem">STANDEE/TARPAULIN</li>
            <li className="sponsortierlist__listitem">
              TABLE{" "}
              <p className="sponsortierlist__listitem-fineprint">
                (For marketing & advertisements. Contact us for more details)
              </p>
            </li>
            <li className="sponsortierlist__listitem">VIDEO ADVERTISEMENT</li>

            <li className="sponsortierlist__listitem">
              SOCIAL MEDIA ACKNOWLEDGMENT
            </li>
            <li className="sponsortierlist__listitem">
              GRAND FEAST BC WEBSITE PROMOTION{" "}
              <p className="sponsortierlist__listitem-fineprint">
                (with direct link to your company website)
              </p>
            </li>
          </ul>
        </div>
        <div className="sponsortierlist__tier">
          <h2 className="sponsortierlist__tier-title">Gold</h2>
          <ul className="sponsortierlist__tier-details">
            <li className="sponsortierlist__listitem">$800</li>
            <li className="sponsortierlist__listitem">
              94.75mm x 132.5mm AD PAGE DIMENSIONS
              <p className="sponsortierlist__listitem-fineprint">
                (3.7" x 5.2")
              </p>
            </li>
            <li className="sponsortierlist__listitem">INVOICE ISSUANCE</li>
            <li className="sponsortierlist__listitem">
              3 RESERVED TICKETS & SEATS
            </li>
            <li className="sponsortierlist__listitem">
              VERBAL ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LINE TEXT ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LOGO DISPLAYED ON BIG SCREEN
            </li>
            <li className="sponsortierlist__listitem">FLYERS</li>
            <li className="sponsortierlist__listitem">STANDEE/TARPAULIN</li>
            <li className="sponsortierlist__listitem">
              SOCIAL MEDIA ACKNOWLEDGMENT
            </li>
            <li className="sponsortierlist__listitem">
              GRAND FEAST BC WEBSITE PROMOTION{" "}
              <p className="sponsortierlist__listitem-fineprint">
                (with direct link to your company website)
              </p>
            </li>
          </ul>
        </div>

        <div className="sponsortierlist__tier">
          <h2 className="sponsortierlist__tier-title">Silver</h2>
          <ul className="sponsortierlist__tier-details">
            <li className="sponsortierlist__listitem">$600</li>
            <li className="sponsortierlist__listitem">
              94.75mm x 64mm AD PAGE DIMENSIONS
              <p className="sponsortierlist__listitem-fineprint">
                (3.7" x 2.5")
              </p>{" "}
            </li>
            <li className="sponsortierlist__listitem">INVOICE ISSUANCE</li>
            <li className="sponsortierlist__listitem">
              2 RESERVED TICKETS & SEATS
            </li>
            <li className="sponsortierlist__listitem">
              VERBAL ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LINE TEXT ACKNOWLEDGEMENT
            </li>
            <li className="sponsortierlist__listitem">
              LOGO DISPLAYED ON BIG SCREEN
            </li>
            <li className="sponsortierlist__listitem">FLYERS</li>
            <li className="sponsortierlist__listitem">
              SOCIAL MEDIA ACKNOWLEDGMENT
            </li>
            <li className="sponsortierlist__listitem">
              GRAND FEAST BC WEBSITE PROMOTION{" "}
              <p className="sponsortierlist__listitem-fineprint">
                (with direct link to your company website)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SponsorTierList;
