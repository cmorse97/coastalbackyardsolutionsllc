import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, description, socials }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        className="h-3/5 w-full object-cover shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mb-1 mt-6">
        {name}
      </Typography>
      {description && (
        <Typography className="font-normal text-blue-gray-500">
          {description}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
