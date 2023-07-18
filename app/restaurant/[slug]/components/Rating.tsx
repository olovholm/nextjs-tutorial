import {Review} from '@prisma/client'
import {calulateReviewRatingAverage} from "@/utils/CalculateReviewRatingAverages";
export default function Rating({reviews}: {reviews: Review[]}) {

    const averageReview = (reviews: Review[]) => {
        return calulateReviewRatingAverage(reviews)
    }

    console.log(reviews)
    return (
        <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">{averageReview(reviews)}</p>
            </div>
            <div>
                <p className="text-reg ml-4">{reviews.length} Reviews</p>
            </div>
        </div>
    )
}
