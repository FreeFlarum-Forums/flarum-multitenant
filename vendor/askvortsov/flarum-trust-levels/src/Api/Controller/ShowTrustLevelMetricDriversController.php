<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\TrustLevels\Api\Controller;

use Askvortsov\TrustLevels\Api\Serializer\TrustLevelMetricDriverSerializer;
use Askvortsov\TrustLevels\Metric\MetricManager;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Validation\Factory;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ShowTrustLevelMetricDriversController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = TrustLevelMetricDriverSerializer::class;

    /**
     * @var MetricManager
     */
    protected $metrics;

    public function __construct(MetricManager $metrics)
    {
        $this->metrics = $metrics;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $request->getAttribute('actor')->assertAdmin();

        $drivers = $this->metrics->getDrivers();

        return $drivers;
    }
}
